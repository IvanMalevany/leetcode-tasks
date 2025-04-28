# LeetCode Share

A collection of LeetCode problems with solutions and tests. This repository serves as a resource for practicing coding interviews and algorithms.

## Project Structure

```
.
├── tasks/              # Organized by categories of LeetCode problems
│   ├── Arrays & Hashing/
│   └── ... (other categories)
└── utils/              # Utility functions used across solutions
    └── normalizeZeros.ts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IvanMalevany/leetcode-tasks.git
cd leetcode-tasks
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Running Tests

To run all tests:
```bash
npm test
```

To run a specific test:
```bash
npx jest "tasks/Arrays & Hashing/238. Product of Array Except Self.test.ts"
```

## Problem Categories

- **Arrays & Hashing**: Problems involving array manipulations and hash maps

## Development

This project uses:
- TypeScript for type safety
- Jest for testing
- ESLint and Prettier for code quality
- Husky for git hooks

### Available Scripts

- `npm test`: Run all tests
- `npm run lint`: Check for linting issues
- `npm run lint:fix`: Fix linting issues
- `npm run format`: Format code using Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License 