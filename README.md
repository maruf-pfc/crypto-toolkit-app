# Crypto Toolkit App

This is a simple web application that allows users to encrypt and decrypt text using various encryption algorithms including AES, DES, TripleDES. The application is built using Next.js and styled with raw CSS.

## Features

- **AES Encryption/Decryption**
- **DES Encryption/Decryption**
- **TripleDES Encryption/Decryption**

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **CryptoJS**: A JavaScript library for performing cryptographic operations.

## Getting Started

### Prerequisites

Make sure you have Node.js and pnpm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/maruf-pfc/crypto-toolkit-app.git
   cd crypto-toolkit-app
   ```

2. **Install the dependencies:**

   ```bash
   pnpm install
   ```

3. **Install additional packages:**

   ```bash
   pnpm install crypto-js node-rsa
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   pnpm run dev
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Usage

1. **Encryption:**

   - Select the encryption method (AES, DES, TripleDES).
   - Enter the plain text you want to encrypt.
   - Click on "Encrypt Now" to get the encrypted text.
   - You can copy the encrypted text by clicking on "Copy Cipher".

2. **Decryption:**
   - Enter the cipher text you want to decrypt.
   - Click on "Decrypt Now" to get the decrypted text.

## Project Structure

📦app
┣ 📜favicon.ico
┣ 📜globals.css
┣ 📜layout.js
┗ 📜page.js
📜.eslintrc.js
📜.gitignore
📜jsconfig.json
📜next.config.js
📜package.json
📜pnpm-lock.yaml
📜README.md

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [CryptoJS](https://cryptojs.gitbook.io/docs/)
