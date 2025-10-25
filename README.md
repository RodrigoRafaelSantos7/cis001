# Coral Infantil de Setúbal

Welcome to the official repository of **Coral Infantil de Setúbal** – A modern web platform for managing and promoting the children's choir in the Setúbal region, Portugal.

### 🎵 About

Coral Infantil de Setúbal is an organization dedicated to children and teenagers aged 6-16 who want to express their passion for singing. This web application provides a platform for managing events, communication with members, and promoting choir activities.

### ✨ Features

- **Responsive Website**: Modern design accessible on mobile and desktop devices
- **Event Calendar**: Track performances and rehearsals
- **Digital Archive**: Access to choir documents and resources
- **Admin Area**: Control panel for choir managers
- **Contact Form**: Automatic email sending to coordinators
- **Email Integration**: Support for notifications via Resend

### 🛠️ Tech Stack

- **Web Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Convex](https://www.convex.dev/) for serverless functions and database
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + custom components
- **Validation**: [Zod](https://zod.dev/) for type-safe validation
- **Forms**: [TanStack Form](https://tanstack.com/form/) with Zod adapter
- **Email**: [React Email](https://react.email/) for email templates
- **Linting**: [Biome](https://biomejs.dev/) for ultra-fast formatting and linting
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for light/dark support
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

### 🚀 Getting Started

#### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

#### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/cis001.git
cd cis001

# Install dependencies
pnpm install
```

#### Environment Variables

Create a `.env.local` file in the project root:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
```

#### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

The server supports automatic hot reload.

#### Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

#### Email Development

```bash
# Preview email templates
pnpm dev:email
```

Open http://localhost:3000 to see the templates preview.

### 📂 Project Structure

```
cis001/
├── convex/                    # Convex Backend
│   ├── schema.ts             # Database schema definition
│   ├── formSubmission.ts     # Form submission logic
│   ├── sendEmail.tsx         # Email integration
│   └── convex.config.ts      # Convex configuration
├── emails/                    # Email templates
│   └── form-submission.tsx   # Confirmation template
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # Homepage
│   │   ├── administracao/    # Admin area
│   │   ├── arquivo/          # Digital archive
│   │   ├── calendario/       # Event calendar
│   │   └── contactos/        # Contacts
│   ├── components/           # React components
│   │   ├── app/              # App-specific components
│   │   ├── ui/               # Reusable UI components
│   │   └── icons/            # Custom icons
│   ├── config/
│   │   ├── site.ts           # Site configuration (metadata, etc)
│   │   └── urls.ts           # URLs and links
│   ├── lib/                  # Utilities and helper functions
│   └── env.ts                # Environment variables (type-safe)
├── public/                    # Static files
├── biome.json                # Biome configuration
└── package.json              # Project dependencies
```

### 🎨 Components

The project includes various reusable components:

- **Bento Grid**: Bento-style layout for presenting features
- **Feature Card**: Card component for showcasing functionality
- **Navigation**: Responsive navigation
- **Footer**: Footer with important links
- **FAQ Section**: Frequently asked questions section
- **Sponsors**: Sponsors showcase
- **Buttons**: Custom button components

### 🔒 Code Quality

The project uses:

- **Biome** for ultra-fast linting and formatting
- **TypeScript** for type safety
- **Zod** for type-safe validation
- **Strict ESLint rules** for accessibility and best practices

#### Check and Fix Code

```bash
# Check for linting issues
pnpm lint

# Fix issues automatically
pnpm format
```

### 📧 Email Functionality

The project supports automatic email sending via [Resend](https://resend.com/):

- Templates created with [React Email](https://react.email/)
- Form submission confirmation
- Administrator notifications

### 🌐 Convex Integration

The backend uses [Convex](https://www.convex.dev/) for:

- Data storage (form submissions)
- Serverless functions (data processing, email sending)
- Real-time subscriptions (future development)

#### Data Schema

```typescript
formSubmissions: {
  email: string;
  name: string;
  message: string;
}
```

### 🚀 Deployment

#### Vercel (Recommended)

```bash
# Automatic deployment on push to main
# Configure at: https://vercel.com
```

The application is optimized for Vercel:

- Next.js 15 with Turbopack
- Automatic Convex integration
- Built-in analytics

### 📱 Accessibility

The project follows WCAG 2.1 accessibility best practices:

- Associated labels for inputs
- Semantic heading hierarchy
- Screen reader support
- Keyboard navigation
- Adequate color contrast

### 🔐 Security

- Protected environment variables
- Server-side validation with Convex
- CSRF protection
- Rate limiting (in production configuration)

### 📝 Available Scripts

```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Check code quality
pnpm format        # Format code
pnpm dev:email     # Preview email templates
```

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

### 📞 Contact

- **Email**: contacto@coralinfantilsetubal.com
- **Instagram**: [@coralinfantilsetubal](https://instagram.com)
- **Facebook**: [Coral Infantil de Setúbal](https://facebook.com)

**Made with ❤️ for the children of Setúbal**
