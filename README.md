# ProductStore - Next.js 15 E-commerce Application

A modern product management application built with Next.js 15, featuring authentication, product browsing, and protected product management functionality.

## 🚀 Features

### Core Features
- **Landing Page** - Hero section, product highlights, navbar, and footer
- **Authentication** - NextAuth.js with credential and Google OAuth support
- **Product Catalog** - Browse products with detailed product pages
- **Protected Dashboard** - Add new products (authentication required)
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode Support** - Automatic dark mode based on system preferences

### Technical Features
- **Next.js 15** with App Router
- **MongoDB** database with Prisma ORM
- **NextAuth.js** for authentication
- **Tailwind CSS** for styling
- **TypeScript-ready** architecture
- **API Routes** for backend functionality

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- MongoDB database (local or cloud)
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd my-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Database (MongoDB)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/nextjs-auth-db?retryWrites=true&w=majority"
# For local MongoDB, use: mongodb://localhost:27017/nextjs-auth-db

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-change-in-production"

# Google OAuth (optional - for social login)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### 4. Database Setup
Generate Prisma client:
```bash
npx prisma generate
```

### 5. Create Demo User (Optional)
You can create a demo user by making a POST request to `/api/register`:

```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Demo User",
    "email": "demo@example.com",
    "password": "demo123"
  }'
```

### 6. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Application Routes

### Public Routes
- **`/`** - Landing page with hero, product highlights, and navigation
- **`/products`** - Product catalog (publicly accessible)
- **`/products/[id]`** - Individual product details page
- **`/login`** - Authentication page

### Protected Routes
- **`/dashboard/add-product`** - Add new products (requires authentication)

### API Routes
- **`/api/auth/[...nextauth]`** - NextAuth authentication endpoints
- **`/api/products`** - GET (fetch products), POST (create product - protected)
- **`/api/register`** - POST (create new user account)

## 🔐 Authentication

The application supports two authentication methods:

### 1. Credential Authentication
- Email and password login
- User registration via API
- Password hashing with bcrypt

### 2. Google OAuth (Optional)
- Social login with Google
- Requires Google Client ID and Secret
- Automatic user creation on first login

### Demo Credentials
For testing purposes, you can use:
- **Email:** demo@example.com
- **Password:** demo123

(Create this user first using the registration API)

## 💾 Database Schema

The application uses the following main models:

### User
- `id` - Unique identifier
- `name` - User's display name
- `email` - User's email (unique)
- `password` - Hashed password
- `accounts` - OAuth accounts
- `sessions` - User sessions
- `products` - Created products

### Product
- `id` - Unique identifier
- `name` - Product name
- `description` - Product description
- `price` - Product price
- `image` - Product image URL
- `userId` - Creator's user ID
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
DATABASE_URL="your-production-mongodb-url"
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="your-production-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 🧪 Testing the Application

### Manual Testing Steps
1. **Landing Page**: Visit `/` to see the homepage
2. **Product Browsing**: Navigate to `/products` to browse products
3. **Product Details**: Click on any product to view details
4. **Authentication**: Try logging in at `/login`
5. **Protected Route**: Access `/dashboard/add-product` (requires login)
6. **Add Product**: Create a new product and verify it appears in the catalog

### API Testing
Test the API endpoints using curl or Postman:

```bash
# Create a user
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Get all products
curl http://localhost:3000/api/products
```

## 🛠️ Development

### Project Structure
```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # NextAuth endpoints
│   │   ├── products/       # Product CRUD operations
│   │   └── register/       # User registration
│   ├── dashboard/          # Protected pages
│   ├── products/           # Product pages
│   ├── login/             # Authentication pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Landing page
│   └── providers.js       # React providers
├── lib/
│   └── prisma.js          # Prisma client
└── prisma/
    └── schema.prisma      # Database schema
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection**: Ensure MongoDB is running and URL is correct
2. **Authentication**: Check NextAuth configuration and environment variables
3. **Build Errors**: Run `npm run lint` to check for code issues
4. **API Errors**: Check browser console and server logs

### Getting Help

- Check the Next.js documentation
- Review NextAuth.js docs for authentication issues
- Verify Prisma schema and database connection
- Ensure all environment variables are set correctly

---

Built with ❤️ using Next.js 15, NextAuth.js, Prisma, and Tailwind CSS.
