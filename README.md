# Adventure Motorbike Rental Web Application

This is a web application for managing and tracking reservation of rented adventure motorbikes, built with [React](https://react.dev/). The application provides a user-friendly interface for browsing, sale statistics, managing reservations, adding and editing motorbikes and users of app. This app is 

## Features

- **Browse Motorbikes:** View a list of available adventure motorbikes with detailed descriptions and images.
- **Adding, Editing and Deleting:** Complete management of reservations and available motorbikes
- **Search and Filters:** Search and filter for reservation and motorbikes
- **Statistics:** Renting statistics for 7, 30 and 90 days.
- **User Accounts:** Create and Edit user profiles to use app.
- **Light/Dark mode:** Reserve and book motorbikes online with a seamless checkout process.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- 
## Technologies Used

- **Library:** [React](https://react.dev/)
- **Routing** [React Router](https://reactrouter.com/)
- **Styling:** [Styled Components](https://styled-components.com/) 
- **State Management:** [React Context API](https://reactjs.org/docs/context.html)
- **Database:** [Supabase](https://supabase.com/)
- **Authentication:** [Supabase Auth](https://supabase.com/docs/guides/auth) for user authentication
- **Data Fetching, Caching, Updating** [TanStack Query / React Query](https://tanstack.com/query/latest) for fetching, caching and updating asynchronous data in React
- **Form manipulation** [React Hook Form](https://react-hook-form.com/) for performant, flexible and extensible forms with easy-to-use validation.
- **Notification** [React Hot Toast](https://react-hot-toast.com/) for user's notification
- **Deployment:** [Vercel](https://vercel.com/)

## Installation

Follow the steps below to set up and run the application locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sinissto/rent-adventure-back-office.git
   cd rent-adventure-back-office
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## Folder Structure

```
/rent-adventure-back-office
├── public              # Public assets (images, icons, etc.)
├── src                     # Next.js App Ruter
    ├── context             # Context for Dark Mode theme
    ├── data                # Sample data 
    ├── features            # App features
        ├── authentication  # Auth specific components and hooks
        ├── bookings        # Bookings specific components and hooks
        ├── check-in-out    # Checking in and out motorbikes specific components and hooks
        ├── dashboard       # Dashboard specific components and hooks
        ├── motorbikes      # Motorbikes specific components and hooks
        └── settings        # App settings specific components and hooks
    ├── hooks               # App global hooks
    ├── pages               # App pages
    ├── services            # API interaction with DB
    ├── styles              # Global style
    ├── ui                  # App components
    └── utils               # Constants and helper functions
├── package.json         # Project dependencies and scripts
├── postcss.config.mjs   # Part of Tailwind configuration
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```

## Live presentation
Visit [https://rent-adventure-back-office.vercel.app] to browse deployed app

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [sinisha.stojanovic@gmail.com](mailto:sinisha.stojanovic@gmail.com).
