# Rauma

Rauma is a E-Cormerce web application built with Next.js, TypeScript, and Tailwind CSS, designed to provide a smooth and efficient user experience.
![Rauma Logo](public/logo.svg)
## 🚀 Installation and Running the Project

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Application in Development Mode

```bash
npm run dev
```

Then, open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build the Application for Production

```bash
npm run build
```

### 4. Start the Application in Production Mode

```bash
npm run start
```

## 🧪 Pre-commit Checks

To ensure code quality, the project runs the following checks automatically before every commit:

- TypeScript type checking
- ESLint code linting
- Application build check to catch compilation errors

If any check fails, the commit will be aborted, and an error message will be displayed.

## 🛠️ Tools and Libraries

- **Next.js**: A React framework for modern web applications.
- **TypeScript**: A typed superset of JavaScript for better code quality.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Husky**: Tool for running Git hooks to enforce code quality before commits.
- **ESLint**: Code analysis tool to find and fix problems in the code.
- **Prettier**: Automatic code formatter.

## 📁 Project Structure

- `src/`: Contains the application source code.

  - `components/`: UI components.
  - `hooks/`: Custom React hooks.
  - `interfaces/`: TypeScript type definitions.
  - `pages/`: Application pages.
  - `styles/`: CSS files.

- `public/`: Static assets such as images and icons.
- `.husky/`: Git hooks configuration.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
