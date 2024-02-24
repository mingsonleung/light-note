# Lightnote

Lightnote is a modern, full-featured application designed to streamline note-taking, organization, and management with a sleek, user-friendly interface. Built with Next.js and integrating a variety of powerful tools and services, Lightnote offers a comprehensive solution for personal and professional use. From passwordless authentication to subscription handling, Lightnote is equipped to meet the needs of today's users.

## Technical Features

- 🌐 **Next.js App Router**: Utilize the full power of Next.js for client-side routing and server-side rendering.
- 🔐 **Kinde Authentication**: Secure passwordless authentication system for a hassle-free login experience.
- 🔑 **OAuth Integration**: Supports Google and GitHub for easy account access.
- 💿 **Supabase Database**: A scalable and flexible database solution to manage application data efficiently.
- 💨 **Prisma ORM**: Simplify database operations with Prisma, making data access and management a breeze.
- 🎨 **Styling**: Tailored with Tailwind.css and Shadcn UI for a modern, responsive design that's easy to customize.
- ✅ **Customizable Color Scheme**: Change the application's color scheme to match your personal or brand preferences.
- 💵 **Stripe for Subscription Handling**: Implement subscriptions with Stripe, including secure payment processing.
- 🪝 **Stripe Webhooks Implementation**: Leverage Stripe webhooks for real-time notifications on subscription events.
- 😶‍🌫️ **Deployment**: Ready for deployment to Vercel, ensuring a smooth, scalable production environment.

## Underlying Functionality

- Cache revalidation for optimized performance.
- Implementation of the Stripe Customer Portal for easy subscription management.
- Creation of a Stripe Checkout page for seamless payment experiences.
- Server-side functionality enhancements.
- Full CRUD operations for notes: Add, View, Edit, and Delete Notes.

## Resources Used

- [Next.js](https://nextjs.org)
- [Kinde](https://dub.sh/xeU8r3v)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/UI](https://ui.shadcn.com)
- [Stripe](https://stripe.com)
- [Prisma](https://prisma.io)
- [Supabase](https://supabase.com)

## Getting Started

### Prerequisites

- Node.js
- npm (comes with Node.js)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/light-note.git
    cd light-note
    ```

2. Install the project dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

Now the app should be running on [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create a build directory with the optimized, minified version of the app.

## Deployment
After building the project, you can deploy the build directory to a web server. Platforms like Vercel, Netlify, or GitHub Pages can be used for deployment.

## Contributing
Contributions are welcome! Feel free to open issues and submit pull requests.

## License 

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).