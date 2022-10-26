---
slug: rails-postgresql-array
title: Rails + PostgreSQL Array
authors: [hope]
tags: [Rails, Ruby, Postgres, PostgreSQL, Array]
---

If you continue to read this article, I assume that you know Ruby, OOP in Ruby, RoR, and Active Record.
Yes, Postgresql support Array types to store. Based on their documentation:
> PostgreSQL allows columns of a table to be defined as variable-length multidimensional arrays. Arrays of any built-in or user-defined base type, enum type, composite type, range type, or domain can be created.
Let's start our journey! (I use Rails API-only as example, but this article can be implemented in normal Rails as well)

## Migration
It is simple:
```ruby
# db/migrate/*_create_books.rb
class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :tags, array: true, default: []
      t.integer :ratings, array: true, default: []

      t.timestamps
    end
    add_index :books, :tags, using: 'gin'
    add_index :books, :ratings, using: 'gin'
  end
end
```
If you want to add new column:
```ruby
# db/migrate/*_add_subjects_to_books.rb
class AddSubjectsToBooks < ActiveRecord::Migration
  def change
    add_column :books, :subjects, :string, array:true, default: []
  end
end
```
:::info
I define the column as t.string :tags, array: true not t.array :tags. 

Compare to jsonb, which t.jsonb :payload. This is because there is no "array" type in PostgreSQL, only "array of column type".

PostgreSQL arrays aren't generic containers like Ruby arrays, they are more like arrays in C, C++, etc.
:::

## Create
Create a record is very simple too:
```bash
irb(main):001:0> Book.create(title: "Hacking Growth", tags: ["business", "startup"], ratings: [4, 5])
   (0.1ms)  BEGIN
  Book Create (0.6ms)  INSERT INTO "books" ("title", "tags", "ratings", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["title", "Hacking Growth"], ["tags", "{business,startup}"], ["ratings", "{4,5}"], ["created_at", "2020-06-29 08:48:42.440895"], ["updated_at", "2020-06-29 08:48:42.440895"]]
   (0.4ms)  COMMIT
=> #<Book id: 1, title: "Hacking Growth", tags: ["business", "startup"], ratings: [4, 5], created_at: "2020-06-29 08:48:42", updated_at: "2020-06-29 08:48:42">
```
## Show
Both tags and ratings now an array object:
```bash
irb(main):002:0> book = Book.first
  Book Load (0.3ms)  SELECT "books".* FROM "books" ORDER BY "books"."id" ASC LIMIT $1  [["LIMIT", 1]]
irb(main):003:0> book.tags
=> ["business", "startup"]
irb(main):004:0> book.tags[0]
=> "business"
```

## Update
To update, the most easiest way is:
```bash
irb(main):005:0> book.tags << 'management'
=> ["business", "startup", "management"]
irb(main):0006:0> book.save!
   (0.1ms)  BEGIN
  Book Update (1.2ms)  UPDATE "books" SET "tags" = $1, "updated_at" = $2 WHERE "books"."id" = $3  [["tags", "{business,startup,management}"], ["updated_at", "2020-06-29 08:54:36.731328"], ["id", 1]]
   (0.4ms)  COMMIT
=> true
irb(main):007:0> book.tags
=> ["business", "startup", "management"]
```
And any other way to add a value to an array object:
```bash
# This works
book.tags << 'management'

#This will work too
book.tags.push 'management'

# This is also will work
book.tags += ['management']
But do not do this: Book.first.tags << 'finance', it won't be saved to the database. Prove:
irb(main):008:0> Book.first.tags << "finance"
  Book Load (0.3ms)  SELECT "books".* FROM "books" ORDER BY "books"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> ["business", "startup", "management", "finance"]
irb(main):009:0> Book.first.save!
  Book Load (0.3ms)  SELECT "books".* FROM "books" ORDER BY "books"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> true
irb(main):010:0> Book.first.tags
  Book Load (0.3ms)  SELECT "books".* FROM "books" ORDER BY "books"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> ["business", "startup", "management"]
```
If you want to use raw SQL, you can check to the official documentation.

## Query
Let say we want to search every single Book that have tags management:
```bash
# This is valid
irb(main):011:0> Book.where("'management' = ANY (tags)")

# This is more secure
irb(main):012:0> Book.where(":tags = ANY (tags)", tags: 'management')

# This is also valid
irb(main):013:0> Book.where("tags @> ?", "{management}")
```
What if we want to search every single book that DO NOT HAVE tags management:
```bash
irb(main):013:0> Book.where.not("tags @> ?", "{management}")
```
You can see the operators and their description in the official documentation.

Now, what if we want to search book that contain multiple tags, like management and startup:
```bash
# This is valid
irb(main):014:0> Book.where("tags @> ARRAY[?]::varchar[]", ["management", "startup"])

# This is valid
irb(main):015:0> Book.where("tags &&  ?", "{management,startup}")

# If you use where.not, you basically search for all that do not contain the parameter given.
```
Now what if we want to search all book that have rating more than 3:
```bash
irb(main):016:0> Book.where("array_length(ratings, 1) >= 3")
```
How about making our search a little bit more robust and supporting pattern matching:
```bash
# %gem% is manaGEMent 
irb(main):017:0> Book.where("array_to_string(tags, '||') LIKE :tags", tags: "%gem%")
```
You can see all the operators and functions and their description in the official documentation.

## Final Word
That's all from me. I'll update if I find something interesting.

source: myself and extract from many articles