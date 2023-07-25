export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleDirectories: ['node_modules', 'src'],
    // presets: [
    //     [ '@babel/preset-env', { targets: { esmodules: true } } ],
    //     [ '@babel/preset-react', { runtime: 'automatic' } ],
    // ],
};