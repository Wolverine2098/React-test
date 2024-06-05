# Food Delivery App

Welcome to the Food Delivery App for Delhi! This project has been developed from scratch, without using Create React App. It is an ongoing project designed to display the available restaurants in Delhi, providing a seamless food ordering experience.

## Technologies Used

- **Node.js**: Backend development
- **React**: Frontend development
- **Parcel**: Application bundler
- **Babel**: JavaScript transpiler
- **Tailwind css** : Styling

## Features

- **Displays the list of restaurants**: View all available restaurants in Delhi.
- **Filter the top-rated restaurants**: Easily find the best-rated restaurants.
- **Filter selective restaurants by name**: Search for restaurants by their name.
- **About Us and Contact Us pages**: Navigate through our About Us and Contact Us pages using React Routing (ongoing development).
- **Restaurant Details**: Click on a restaurant to view its menu and other details.
- **Displays whether the User is online**: check the header shows a green dot when the user is online

While the data is being fetched, a shimmer UI ensures a smooth user experience.

## APIs Used

1. **Fetch list of restaurants**

   - **URL**: `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.619583&lng=77.019518&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
   - **Type**: GET

2. **Fetch restaurant menu and details**

   - **URL**: `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId={}&catalog_qa={}&submitAction=ENTER`
   - **Type**: POST

3. **To Fetch the Contributer data in about us section**

   - **URL**: `https://api.github.com/users/USERNAME`
   - **Type**: GET

## UI Screenshots

![alt text](<Screenshot 2024-06-02 at 7.34.35 PM.png>)

![alt text](<Screenshot 2024-06-02 at 7.34.56 PM.png>)

![alt text](<Screenshot 2024-06-05 at 10.29.43 AM.png>)

![alt text](<Screenshot 2024-06-05 at 10.30.21 AM.png>)

## Project Status

This project is currently in progress, with ongoing development to enhance features and user experience.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Wolverine2098/React-test.git
   cd React-test
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run start
   ```

## Contribution

We welcome contributions to enhance this project. If you have any ideas or suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to explore the app, and we hope you enjoy the seamless food ordering experience!

Happy Coding! 🌟
