# Products Task using FakeStore API

- [Try It]()


## How to install and run the code ?
- git config url
- npm install
- npm run dev

## Tools & Libraries:
- Axios
- TailwindCSS
- React Router
- Heroicons
- useDebounce

Used unDraw for images.


## Challenges:
- I faced an issue with passing the category to the product component in a clean architecture that fits the feature-based architecture approatch and separation between UI and bussiness login.
- After debugging, I realized that the Categories and Products components were siblings in the component tree with HomePage component as their parent. Using "lifting state up" approach would have broken my "seperation of UI and bussiness login" approach.
- To solve this, I used the React Context to share category between Categories and Products Components.
------------------------------------------------------------------------------------------------------------------------------------------
- I faced a challenge while implementing the Search feature because this API didn't provide a dedicated search endpoint. After researching, I implemented a client-side solution successfully. 
