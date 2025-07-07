# React + TypeScript + Vite Template

A modern, production-ready React template with TypeScript, comprehensive testing setup, and best practices built-in.

## 🚀 Features

- ⚡️ **Lightning Fast Development** - [Vite](https://vitejs.dev/) for instant HMR and optimized builds
- ⚛️ **React 19** - Latest React with modern hooks and concurrent features
- 🛡️ **TypeScript** - Full type safety with strict configuration
- 🧹 **ESLint + Prettier** - Code quality, consistency, and auto-formatting
- 🧪 **Testing Ready** - Vitest + React Testing Library + Coverage reports
- 🎨 **Styling** - Sass/SCSS support with CSS modules ready
- 📱 **Accessibility** - jsx-a11y rules for inclusive design
- 🔧 **Enhanced Path Aliases** - Clean imports with `@components/*`, `@utils/*`, `@assets/*`, `@types/*`
- 🛡️ **Strict TypeScript** - ES2022 target with enhanced type safety rules
- 📦 **Optimized Bundle** - Tree-shaking and code splitting out of the box

## 📋 Requirements

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or yarn/pnpm equivalent)

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the template
git clone git@github.com:ElizabethSh/vite-template.git my-new-project

# Navigate to project
cd my-new-project

# Install dependencies
npm install

# Start development server
npm run start
```

Your app will be running at `http://localhost:3000`

### 2. Development Workflow

```bash
# Development server with HMR
npm run start

# Type checking (without emitting files)
npm run type-check

# Linting
npm run lint
npm run lint:fix        # Auto-fix issues

# Testing
npm run test           # Run tests with coverage
npm run test:watch     # Watch mode for development
npm run test:ui        # Visual test runner interface

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
vite-template/
├── public/                # Static assets
│   └── vite.svg
├── src/                   # Source code
│   ├── assets/            # Images, icons, etc.
│   │   └── react.svg
│   ├── components/        # Reusable UI components
│   │   └── button/
│   │       ├── index.tsx
│   │       ├── button.scss
│   │       └── button.test.tsx
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── app.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   ├── index.scss         # Global styles
│   └── vite-env.d.ts      # Vite type definitions
├── eslint.config.js       # ESLint configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript project references
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.node.json     # Node.js TypeScript config
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Test configuration
└── vitest.setup.ts        # Test setup and global imports
```

## 🛠️ Configuration Details

### TypeScript

- **Strict mode enabled** - Maximum type safety with enhanced rules
- **Modern ES2022 target** - Latest JavaScript features and optimizations
- **Path aliases configured** - Clean imports with `@components/*`, `@utils/*`, `@assets/*`
- **Enhanced type checking** - `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`, `noImplicitReturns`
- **Bundler optimized** - Perfect integration with Vite's bundler mode
- **Project references** - Optimized build performance with caching

### ESLint

- **Modern flat config** - ESLint 9+ configuration
- **React best practices** - React Hooks, JSX accessibility
- **TypeScript integration** - Type-aware linting for src files
- **Import sorting** - Automatic import organization
- **Accessibility rules** - jsx-a11y for inclusive design

### Testing

- **Vitest** - Fast unit testing with native ES modules
- **React Testing Library** - Component testing best practices
- **Coverage reports** - Built-in code coverage with v8
- **jsdom environment** - Browser-like testing environment

### Styling

- **Sass/SCSS support** - Enhanced CSS with variables and nesting
- **CSS Modules ready** - Scoped styling when needed
- **Modern CSS** - Support for latest CSS features

## 🎯 Best Practices Included

### Component Structure

```tsx
// components/button/index.tsx
import type { ButtonHTMLAttributes } from "react";
import "./button.scss";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  variant?: "primary" | "secondary" | "danger";
  // ... other props
};

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  // Implementation with path aliases
  // import utils from "@utils/helpers";
  // import { MyType } from "@types/common";
}
```

### Path Alias Usage Examples

```tsx
// Instead of relative imports
import Button from "../../../../components/button";
import { formatDate } from "../../../utils/date";

// Use clean path aliases
import Button from "@components/button";
import { formatDate } from "@utils/date";
import type { User } from "@types/user";
import logo from "@assets/logo.svg";
```

### Testing Examples

```tsx
// components/button/button.test.tsx
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("renders with correct variant class", () => {
    render(<Button label="Test" variant="primary" />);
    expect(screen.getByRole("button")).toHaveClass("button-primary");
  });
});
```

## 🔧 Customization

### Adding New Path Aliases

```json
// tsconfig.app.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"], // UI components
      "@utils/*": ["utils/*"], // Utility functions
      "@hooks/*": ["hooks/*"], // Custom React hooks
      "@assets/*": ["assets/*"], // Images, icons, etc.
      "@types/*": ["types/*"], // Type definitions
      "@pages/*": ["pages/*"], // Page components
      "@settings": ["settings.ts"] // App configuration
    }
  }
}
```

### TypeScript Strict Rules

The template includes enhanced TypeScript rules for better code quality:

```json
// tsconfig.app.json - Enhanced type safety
{
  "compilerOptions": {
    "exactOptionalPropertyTypes": true, // Stricter optional properties
    "noImplicitReturns": true, // All paths must return
    "noImplicitOverride": true, // Explicit override keyword
    "noPropertyAccessFromIndexSignature": true, // Safer property access
    "noUncheckedIndexedAccess": true // Safer array/object indexing
  }
}
```

### Adding New ESLint Rules

```js
// eslint.config.js
export default tseslint.config(
  // ...existing config
  {
    rules: {
      // Your custom rules here
      "prefer-const": "error",
      "no-console": "warn",
    },
  }
);
```

## 💡 Tips & Tricks

### Performance Optimization

- Use `React.memo()` for expensive components
- Implement code splitting with `React.lazy()` and `Suspense`
- Leverage Vite's automatic code splitting for optimal bundle sizes

### Development Experience

- Use the Vitest UI for interactive testing: `npm run test:ui`
- Enable TypeScript strict mode for better code quality
- Use ESLint auto-fix: `npm run lint:fix`

### Deployment

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy dist/ folder to your hosting service
```

## 📚 Useful Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🐛 Troubleshooting

### Common Issues

**TypeScript errors in test files:**

- Make sure `vitest.setup.ts` is properly configured
- Check that test files are included in `tsconfig.app.json`

**ESLint parsing errors:**

- Verify TypeScript project structure in `tsconfig.json`
- Check that files are included in the appropriate TypeScript projects

**Vite dev server issues:**

- Clear Vite cache: `rm -rf node_modules/.vite`
- Restart the development server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT © [Lisa Shoshkina](https://github.com/ElizabethSh)

---

**Happy coding! 🚀**
