<img src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/139427/ownr-logo-stp.png" width="400" />

---

# Build With Assembly Take Home Task

An interactive & fully responsive, full stack web application to display animal photos through carousel. 🚀

## 🔗 Live Demo

[Click For Live Demo](https://ownr-harshitbehl.vercel.app)

## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/harshitbehl/ownr-harshitbehl.git
```

Go to the project directory

```bash
  cd ownr-harshitbehl > cd client (Frontend) or cd server (Backend)
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🔖 Features

- Interactive sticky header with an animated github source code button & links.
- Beautiful and interactive landing page showcase with animations.
  - Purple ink live motion background.
  - Spring animated "Ownr" text on hover.
  - SVG Illustration animation on first render.
  - A delayed animated attention grabbing button, which will guide towards the carousel section.
  - SVG waves section divider for modern look and feel.
- Carousel section with background inspired from ownr's website.
  - Modern & attractive carousel design.
  - Carousel is interactive and images are rendered based on the selected filter options.
  - Select all available options to display combination of those options in random order.
  - Live API data fetching status updates, for each request to the server a "Loading..." text is rendered until a response is received.
- Modern footer with material themed icons and text.
  - Animated links on hover.
  - Flat material & minimalistic themed icons.
- Responsive UI
  - Only supported for mobile devices at the moment.

**Note:** Most of the links are dummy links at the moment.

## 📸 Screenshots

**Landing Page & Showcase**

![Landing Page & Showcase](/assets/readmeImages/landingPage.png)

**Carousel Section**

![Carousel Section](/assets/readmeImages/carouselSection.png)

**Footer**

![Footer](/assets/readmeImages/footer.png)

**Smartphone Version**

<img src="/assets/readmeImages/phoneVersion.png" height="500"/>

## 📌 Tasks Performed

**Requirement Gathering & Analysis**

- Select tech stack to solve the task.
- Setup project boilerplate and install packages, libraries and dependencies.
- Create a scalable directory structure with separation of concerns.

**Design**

- Select & wireframe application layout & design, take inspiration from ownr's website.
- Select application theme, color pallette & typography.
- Break application into components while ensuring it stays scalable.

**Development (Coding & Implementation)**

- Develop major components: header, showcase, carousel, footer.
- Add styling, transitions & animations to application components.
- Implement carousel and render image results conditionally.
- Implement react routing for easier navigation within the app.
- Add responsiveness to the user interface for smartphone breakpoints.
- Develop REST API to perform Create & Read operations for animal resources.
- Implement CORS on server side for cross origin access.
- Create NoSQL database through MongoDB Atlas for storing and persisting data throughout application.

**Testing**

- Manual test each and every scenario possible for results according to selected options.
- Add more validations and conditions according to possible scenarios.
- Perform unit testing using jest & react testing library.

**Deployment**

- Create a final build of application.
- Deploy client on vercel.
- Deploy server on heroku.

## 🚀 API Reference

- Get All Sharks (GET): https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/sharks
- Create Shark (POST): https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/sharks
- Get All Cats (GET): https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/cats
- Create Cat (POST): https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/cats
- Get Random Animals (GET): https://ownrapi-harshitbehl.herokuapp.com/api/v1/animals/random-animals

## ⚙️ Tech Stack

**Development:** React, React Router, Axios, JavaScript, Node.js, Express, Mongoose

**Database:** MongoDB Atlas

**Styling:** SASS, CSS

**Animations & Transitions:** Framer Motion, CSS Animations

**Icons:** React Icons

**Testing:** Jest, React Testing Library

**Package Manager:** NPM

**Deployment:** Vercel (Client), Heroku (Server)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## 👨🏽‍💻 Author

- [@harshitbehl](https://github.com/harshitbehl)
