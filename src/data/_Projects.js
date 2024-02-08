/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line header/header
import React from 'react';

const projects = [
  {
    category: 'AI',
    title: 'Fin-RWKV',
    slug: '#fin-rwkv',
    imageUrl: 'img/projects/finrwkv.png',
    subtitle: 'Attention-Free LLM For Scalable Financial Analysis',
    period: '08 Feb 2024',
    tech: 'RWKV, Fine-Tuning, Finance, LLM, Linear Transformers', 
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
        The problem? Transformers Attention are reaching their limits.
        Competing on training with GPT-4 or BloombergGPT for finance is just unfeasible for 
        startups or individuals, since costs are in the magnitude of millions.
        Fin-RWKV is a fine-tuned version of RWKV that was fine-tuned on the finance-alpaca dataset 
        for a few dollars in a few hours. This can be used to answer user prompts along with real-time 
        data aggregated by MindsDB, like OpenBB, vector DBs, or internal datasets.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MQI2CJ9kn-E?si=acdi7bkF3EKgkz-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </>
    ),
    links: [
      {
        name: 'HuggingFace ',
        link: 'https://huggingface.co/collections/umuthopeyildirim/fin-rwkv-v1-65b670fd16301f4030f4359a',
      },
      {
        name: 'Demo',
        link: 'https://huggingface.co/spaces/umuthopeyildirim/fin-rwkv-1b5',
      },
      {
        name: 'Slides',
        link: 'https://docs.google.com/presentation/d/1vNQ8Y5wwR0WXlO60fsXjkru5R9I0ZgykTmgag0B3Ato/edit?usp=sharing',
      }
    ],
  },
  {
    category: 'Website',
    title: 'Helicone',
    slug: '#helicone',
    imageUrl: 'img/projects/helicone.jpeg',
    subtitle: 'The easiest way to monitor your LLM-applications at scale.',
    period: '24 Nov 2023',
    tech: 'NextJS, Cloudflare, OpenAI, Tailwindcss, Vercel, Supabase, Clickhouse, TypeScript, PostgreSQL, KV, Cache',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          As a collaborative member of the Helicone Team, I contributed to the
          development of a robust platform designed for monitoring Large
          Language Models (LLMs) at scale. This innovative platform streamlines
          the process of managing and analyzing LLMs, enhancing efficiency and
          scalability. My role encompassed both technical development and
          project optimization, ensuring a seamless user experience and
          effective system performance.
        </p>
        <h4>Helicone Technical Contributions: 🎯</h4>
        <ul style={{listStyleType: 'disc'}}>
          <li>
            Revamped documentation and fixed TypeScript configurations for
            Langchain and other projects.
          </li>
          <li>
            Removed and replaced `recharts` with alternatives in Tremor,
            entailing deletion and repurposing of multiple components.
          </li>
          <li>
            Developed and integrated a new `cache_hits` table in Clickhouse,
            enhancing the `recordCacheHit` function for improved data
            management.
          </li>
          <li>
            Eliminated unnecessary dependencies like `@dqbd/tiktoken` and
            updated API calls by substituting `axios` with `fetch`.
          </li>
          <li>
            Implemented code quality improvements by resolving eslint
            unused-imports errors and removing redundant imports.
          </li>
          <li>
            Enhanced user experience by adding redirect options for Google and
            GitHub sign-in and supporting GitHub authentication.
          </li>
          <li>
            Contributed to user interface enhancements, including the addition
            of a user cost graph.
          </li>
        </ul>
        <h4>Helicone Project Management and Optimization:</h4>
        <ul style={{listStyleType: 'disc'}}>
          <li>
            Managed testing requirements for UI/UX improvements, particularly
            for the Cache page.
          </li>
          <li>
            Streamlined onboarding processes by modifying email templates and
            onboarding checks, and setting existing users to 'has_onboarded'.
          </li>
          <li>
            Ensured thorough testing, including end-to-end testing of GitHub
            authentication integration.
          </li>
        </ul>
      </>
    ),
    links: [
      {
        name: 'Website',
        link: 'https://helicone.ai',
      },
      {
        name: 'Github',
        link: 'https://github.com/helicone/helicone',
      },
    ],
  },
  {
    category: 'Website',
    title: 'MarkAI',
    slug: '#markai',
    imageUrl: 'img/projects/markai.png',
    subtitle:
      'MarkAI is an OpenAI RAG-based chatbot that seamlessly integrates with your existing documents.',
    period: '21 Nov 2023',
    tech: 'Serverless, NextJS, Vector, OpenAI, Tailwindcss, RAG, NextUI, Vector Database, Vercel, Supabase, Clerk',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          MarkAI is an OpenAI RAG-based chatbot that seamlessly integrates with
          your existing documents. It is a no-code application that does not
          require any coding skills. Demo shows an example application of
          MarkAI. It is currently being used in on-boardings, customer support,
          and internal knowledge management. However, it can be used in many
          different areas. For example, it can be used in the education sector
          to answer students' questions. This is an open-source project. You can
          contribute to the project by forking the repository and sending a pull
          request.
        </p>
        <h4>Key Features 🎯</h4>

        <ul>
          <li>
            <b>Fast and Efficient</b>: Designed with speed and efficiency at its
            core. MarkAI ensures rapid access to your data
          </li>
          <li>
            <b>Secure</b>: Your data, your control. Always.
          </li>
          <li>
            <b>File Compatibility</b>: Text, Markdown, HTML
          </li>
          <li>
            <b>Open Source</b>: Freedom is beautiful, and so is MarkAI. Open
            source and free to use.
          </li>
          <li>
            <b>Public/Private</b>: Invite your team to collaborate, or keep your
            data private.
          </li>
        </ul>
      </>
    ),
    links: [
      {
        name: 'Website',
        link: 'https://markai.umutyildirim.com',
      },
      {
        name: 'Github',
        link: 'https://github.com/umuthopeyildirim/markai',
      },
    ],
  },
  {
    category: 'Website',
    title: 'Mirage Renderer',
    slug: '#mirage-vision-renderer',
    imageUrl: 'img/projects/mirage-vision-renderer.png',
    subtitle:
      "Precisely annotated synthetic image data solves cold start problems, increases existing training data's efficiency, covers edge cases and reduces development time and cost.",
    period: '18 July 2023',
    tech: 'JavaScript, Unity, Next.js, React, AWS, Supabase, Image Generation, Data Science, TailwindCSS, FloatUI, DaisyUI, Synthetic Dataset Generation',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          Mirage Vision Renderer is a powerful cloud-based service designed to
          generate high-quality synthetic data using advanced algorithms and
          cutting-edge technology. It offers a convenient solution for creating
          large volumes of data required for machine learning, computer vision,
          and various other applications, eliminating the need for manual
          collection and annotation.
        </p>
        <h4>Features</h4>
        <p>
          User-Friendly Interface: Mirage Vision Renderer offers an intuitive
          and user-friendly interface, ensuring a seamless experience for users
          of all levels of expertise. Generating high-quality synthetic data has
          never been easier.
        </p>
        <p>
          Unity Integration: The Mirage Vision Renderer provides a dedicated
          Unity package that facilitates seamless integration with Unity
          applications. This integration allows users to utilize their custom
          rendering pipelines with Mirage Rendering, enabling a wide range of
          possibilities.
        </p>
      </>
    ),
    links: [
      {
        name: 'Website',
        link: 'https://mirage.vision',
      },
      {
        name: 'Portal',
        link: 'https://app.mirage.vision',
      },
      {
        name: 'Documentation',
        link: 'https://docs.mirage.vision',
      },
    ],
  },
  {
    category: 'Website',
    title: 'Flatiron Open Source',
    slug: '#flatiron-open-source',
    imageUrl: 'img/projects/flatiron-open-source.png',
    subtitle: 'Flatiron School lessons for graduated students.',
    period: '2 Jan 2023',
    tech: 'JavaScript, Ruby, Python, computer-science, Data Science, Education, Open Source',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          Flatiron School Open Source is a hub for bootcamp graduates to have
          efficient access to course modules, lessons, and data. Use the app as
          a refresher, learn something new, or get ready for interviews.
        </p>
        <p>
          Software Engineering, Data Science, and Data Structures & Algorithms
          are currently available. Product Design and Cybersecurity will be
          released in the near future.
        </p>
        <h4>Deployment & Usage</h4>
        <p>
          To use this repo you need to install{' '}
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            node
          </a>{' '}
          and{' '}
          <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
            yarn
          </a>
          . Once you have those installed, you can run the following commands to
          start the server:
          <br></br>
          <code>yarn</code>
          <br></br>
          <code>yarn dev</code>
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/FlatironSchoolOpenSource',
      },
      {
        name: 'Website',
        link: 'https://flatironopensource.ml',
      },
    ],
  },
  {
    category: 'Open Source Tool',
    title: 'Puppateer Screenshot',
    slug: '#puppateer-screenshot',
    imageUrl: 'img/projects/puppateer-screenshot.png',
    subtitle:
      'The Google Cloud function that can take screenshots of websites.',
    period: '21 Nov 2022',
    tech: 'JavaScript, Google Cloud Storage, Google Cloud Functions, Puppetter',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          I would like to point out that this is a Google Cloud function that
          can be used to take screenshots of websites. A Puppateer emulator is
          able to mimic the behavior of a browser and to take screenshots of
          websites using it. A serverless function is a function that can be
          invoked by HTTP requests and can be executed without requiring a
          server.
        </p>
        <h4>Deployment & Usage</h4>
        <p>
          For deployment and usage go to{' '}
          <a
            href="/blog/building-a-website-screenshot-api-with-puppeteer-and-google-cloud-functions"
            target="_blank">
            here
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/puppateer-screenshot',
      },
      {
        name: 'Blog',
        link: '/blog/building-a-website-screenshot-api-with-puppeteer-and-google-cloud-functions',
      },
    ],
  },
  {
    category: 'Website',
    title: 'Markhope',
    slug: '#markhope',
    imageUrl: 'img/projects/markhope.png',
    subtitle:
      'Using markdown and Jekyll technology, MarkHope enables people to share and discover the best content on the web.',
    period: '6 Oct 2022 - 10 Oct 2022',
    tech: 'Rails, Markdown, JavaScript, TailwindCSS, ReactJS, Ruby',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          Using MarkHope, you can host your Markdown documents online. It's a
          simple way to host your Markdown files on the web. It is a no-code
          application that does not require any coding skills.
        </p>
        <h4>Deployment</h4>
        <ul>
          <li>Ruby version: 2.7</li>
          <li>Database: PostgreSQL</li>
          <li>
            Configuration: <code>bundle install</code>
          </li>
          <li>
            Database creation: <code>rails db:migrate</code>
          </li>
          <li>
            Database initialization: <code>rails db:seed</code>
          </li>
          <li>
            Deployment instructions: <code>rails s</code>
          </li>
        </ul>
        <h4>Usage</h4>
        <p>
          For Usage go to MarkHope Docs{' '}
          <a href="/docs/category/markhope" target="_blank">
            here
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/markhope',
      },
      {
        name: 'Website',
        link: 'https://markhope.ml',
      },
      {
        name: 'Docs',
        link: '/docs/category/markhope',
      },
    ],
  },
  {
    category: 'Website',
    title: 'MindGarden',
    slug: '#mindgarden',
    imageUrl: 'img/projects/mindgarden.png',
    subtitle:
      'MindGarden is an diary writing software, but you can also express your feelings on your diaries.',
    period: '6 Oct 2022 - 10 Oct 2022',
    tech: 'Sinatra, JavaScript, TailwindCSS, ReactJS, Diary, Ruby',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          This project is was initially intended to focus more on the backend
          than the frontend, so that we could try to keep the React side of
          things relatively simple, but thanks to one of our engineers here at
          MindGarden, not only did he help to build a beautiful backend, but he
          single handedly tackled all of the frontend work on his own and the
          outcome was simply amazing. This gave the rest of the team time to
          master our newly consumed knowledge about Ruby while creating an
          amazing back end.
        </p>
        <p>
          This project focuses on developing a Sinatra API backend that makes
          use of Active Record to access and store data in a database. This
          database will be accessed and stored by a separate React frontend that
          uses the API to communicate with the database.
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/mindgarden',
      },
      {
        name: 'Website',
        link: 'https://mindgarden.ml',
      },
    ],
  },
  {
    category: 'Website',
    title: 'MyPassManager',
    slug: '#mypassmanager',
    imageUrl: 'img/projects/mypassmanager.png',
    subtitle:
      'Website that allows users to store secure passwords and access them from anywhere',
    period: '12 Sep 2022 - 16 Sep 2022',
    tech: 'Firebase, JavaScript, TailwindCSS, ReactJS, Password Manager',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          MyPass Manager is a simple password manager that uses the MyPass API
          to store your passwords.
        </p>
        <h4>Installation</h4>
        <p>
          MyPass Manager uses Firebase for backend stuff, so you need to create
          a Firebase project and add your project api key to .env file. You can
          find the api key in your Firebase project settings.
        </p>
        <p>
          After that, you need to install the dependencies and run the project.
        </p>
        <code>yarn install && yarn start</code>

        <h4>
          <br></br>Deployment
        </h4>
        <p>
          You can deploy this website using Firebase Hosting easily. Just use
          Firebase Hosting{' '}
          <a
            target="_blank"
            href="https://firebase.google.com/docs/hosting"
            rel="noreferrer">
            documentation
          </a>
          .{' '}
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/mypassmanager',
      },
      {
        name: 'Website',
        link: 'https://mypassmanager.ml',
      },
    ],
  },
  {
    category: 'Smart Contract',
    title: 'Decentralized Todo',
    slug: '#decenralized-todo',
    imageUrl: 'img/projects/decenralized-todo.png',
    subtitle: 'A decentralized todo list on the Near blockchain',
    period: '25 April 2022',
    tech: 'TypeScript, JavaScript, Shell',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>This contract can bu used to add, delete and mark your todo list.</p>
        <h4>Setup</h4>
        <p>
          1. Install dependencies <code>cd decentralized-todo && yarn</code>
        </p>
        <p>
          2. Compile the contract - <code>yarn build</code>
        </p>
        <p>
          3. Deploy the contract <code>yarn deploy</code> PS: This will deploy
          it to your actual test account
        </p>

        <h4>Go to Github for contract interactions.</h4>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/decentralized-todo',
      },
    ],
  },
  {
    category: 'Website',
    title: 'Educatory: Personalized Educational Tool',
    slug: '#educatory',
    imageUrl: 'img/projects/educatory.png',
    subtitle:
      "Educatory is a personalized educational tool. With a comprehensive Kindergarten-4th grade curriculum, personalized guidance, and real-time analytics, Educatory meets each student's unique needs.",
    period: '12 April 2020',
    tech: 'PHP, MySQL',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <h4>1- Problem</h4>
        <p>
          As it is known, life has come to a standstill due to the COVID-19
          virus. In the first place, educational opportunities deteriorated. No
          matter how intertwined the students are with technology, they cannot
          use the devices they have efficiently. For this reason, the
          opportunities offered to students are not efficient. If this problem
          is not prevented, we will regress rather than develop as long as
          COVID-19 continues.
        </p>
        <h4>2- Solution</h4>
        <p>
          Educatory is a personalized education tool. With a comprehensive
          Kindergarten-12th curriculum, personalized guidance, and real-time
          analytics, Educatory meets the unique needs of each student.
        </p>
        <p>
          Educatory offers a learning method without rote learning. Not by
          watching videos or looking at the solution of questions, but by
          listening to Educatory's suggestions, students become focused and
          learn the subjects by getting rid of the memorization method.
        </p>
        <h4>3- Setup</h4>
        <p>Start a PHP web server and run the project.</p>
        <p>No additonal setup is required!</p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/educatory',
      },
      {
        name: 'Website',
        link: 'https://educatory.ml/',
      },
    ],
  },
  {
    category: 'Mobile',
    title: 'APPINI: Transform Websites to Mobile Apps',
    slug: '#appini',
    imageUrl: 'img/projects/appini.png',
    subtitle:
      'Command Line Interface that generates mobile apps from responsive websites!',
    period: 'Feb to Jan 2020',
    tech: 'Flutter, Python, Dart',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <p>
          Command Line Interface(CLI) that generates mobile apps from responsive
          websites.
        </p>
        <h4>Installation</h4>
        <p>
          Installation is very simple <code>$ pip install appini</code>, also
          check out flutter installation guide{' '}
          <a
            href="https://docs.flutter.dev/get-started/install"
            target="_blank"
            rel="noreferrer">
            from here!
          </a>
        </p>
        <h4>Usage</h4>
        <p>
          After installation, you can use <code>$ appini</code> command in your
          terminal. You can also use <code>$ appini --help</code> to see all the
          options.
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/appini',
      },
    ],
  },
  {
    category: 'IoT',
    title: 'CUBBA: Pothole Detection System',
    slug: '#cubba',
    imageUrl: 'img/projects/cubba.png',
    subtitle: 'Dedect potholes with raspberry pi and camera!',
    period: 'Feb to Jul 2020',
    tech: 'Raspberry Pi, Python, OpenCV, TensorFlow, NumPy',
    team: [
      {
        name: 'Umut Hope YILDIRIM',
        link: 'https://github.com/umuthopeyildirim/',
      },
    ],
    description: (
      <>
        <h4>1- Problem</h4>
        <p>
          Considering that we use the roads in the cities we live in, we all
          deal with potholes on a daily basis. Between 50% and 70% of the roads
          in big cities such as İstanbul, Ankara, İzmir and Adana are used in a
          damaged state. On average, slightly more than 50 thousand drivers a
          year in Turkey experience a problem related to potholes. It could be
          anything; puncture of the tire can lead to the bending of the rim and
          deterioration of the shock absorber. The financial cost of the repair
          of these damages reaches up to approximately 1 billion Turkish liras
          in Turkey. Beyond a financial hardship, potholes can cause a variety
          of accidents and problems even for the most experienced drivers. About
          one-fifth of the 7,000 annual traffic deaths are due to poor roads.
          Since the recycling rate of spare parts of these vehicles is less than
          1%, the precaution that can be taken is to prevent these damages and
          losses.
        </p>
        <h4>2- Solution</h4>
        <p>
          Our solution is simple, thanks to the camera connected to the
          Raspberry Pi, the video of the vehicle is recorded along the way. Then
          this video is classified by deep learning. The detected pit is sent to
          the website along with the picture and GPS coordinate.
        </p>
        <p>
          Then, when the pit is detected and approved, the road is connected to
          the municipality to repair the pit. We report to the relevant
          department of the municipality. This system also analyzes the road
          defect and road condition and warns the municipality when it should be
          repaired. In this way, the municipality both saves money and minimizes
          material and moral damage to the environment.
        </p>
        <h4>3- How it works</h4>
        <p>
          After Raspberry Pi records the road image and gps coordinates, it
          splits the road image frame by frame into hours, minutes and seconds.
          Each frame is saved to the device as a picture.
        </p>
        <p>
          Every image is converted to OpenCV format. Although Raspberry Pi is a
          very efficient computer. It's not a powerful computer. Two kinds of
          Computer Vision algorithms are used. These are commonly used in Image
          Classification and Object Detection. However, Object Detection is not
          strong enough to run on Raspberry Pi, I could get a maximum of 3-4
          FPS. So I used Image Classification. I uploaded and marked my dataset
          with Azure Cognitive Services. After the model training is finished,
          Image Classification deep learning application can work with sample
          codes and Tensorflow documentation.
        </p>
        <h4>4- Setup</h4>
        <p>Follow the codes with Python3.</p>
        <code>$ pip3 install -r requirements.txt</code>
        <br></br>
        <code>$ python3 main.py</code>

        <h4>
          <br></br>5- In the Future
        </h4>
        <ul>
          <li>
            The dataset is not very comprehensive, it covers Turkey's 2-4 km
            long street roads. So a larger dataset may be efficient.
          </li>
          <li>
            It is possible to use a more powerful computer to increase the speed
            of the application.
          </li>
          <li>
            Since I don't have a GPS device, even if I wrote the function, it
            needs to be rewritten and tested.
          </li>
          <li>
            It's not a package software but can be translated easily. If it is
            production software, it can be coded as a startup as soon as the
            tool is running.
          </li>
          <li>Main.py can be overhauled.</li>
        </ul>
      </>
    ),
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/umuthopeyildirim/cubba',
      },
      {
        name: 'Website',
        link: 'https://cubba-website.pages.dev/',
      },
    ],
  },
];

export default projects;
