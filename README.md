# 🏠 Roomble

Roomble is a secure, verification-first roommate-matching web app that empowers users to find trustworthy flatmates—and seals the deal with a legally binding smart contract. From multi-step identity verification to blockchain-powered roommate agreements, Roomble ensures your next co-living experience is built on transparency, consent, and commitment.

🎥 **[Watch the Demo](https://drive.google.com/file/d/1vvDLNaG75SpACZA64SJSvVQsP5FwDHuG/view?usp=drive_link)**

---

## 🔐 How It Works

### 1. **Signup Flow**
- Users sign up with personal details.
- Multi-step verification:
  - ✅ Mobile number
  - ✅ Email ID
  - ✅ LinkedIn profile
- Once verified, the user chooses:
  - **Has a place to share** → Upload up to **6 photos**
  - **Looking for a place** → Upload up to **2 photos**
- Select **3 personality prompts** from a predefined list
- Complete the onboarding

### 2. **Login Options**
- Users can log in via:
  - Mobile Number
  - Email ID
  - Aadhaar Number
  - LinkedIn ID

---

## 🧭 Navigation

After login, the top navbar provides 5 main sections:

1. **Discover**  
   Browse through potential roommate profiles in a swipe-style interface.

2. **Likes**  
   View users who’ve liked your profile.

3. **Chats**  
   - Mutual likes become chat connections.
   - View and message matches in the chat list.
   - Each chat room includes user profile preview and smart contract initiation.

4. **Profile**  
   View or edit your own profile and preferences.

5. **Sign Out**  
   Log out securely.

---

## 🤝 Smart Contracts — Legalizing the Roommate Agreement

### Powered by Web3 and MetaMask 💼

**How It Works:**
1. **Create Contract:**  
   One user initiates the contract with both users’ wallet addresses and a message. Only the initiator pays gas fees.

2. **Sign Contract:**  
   Each user connects their MetaMask wallet and signs the contract individually. Everyone pays their own gas fees when signing.

3. **View Details:**  
   Check contract status and see who has signed. Once both signatures are in—bam! It’s legally binding on the blockchain.

> ⚠️ Only users listed in the contract (as User 1 or User 2) can sign it.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Context API

**Backend:**
- Node.js
- Express.js
- MongoDB

**Blockchain:**
- Solidity Smart Contracts
- MetaMask Integration
- Sepolia Testnet Deployment

**Authentication:**
- Email, Mobile OTP, Aadhaar & LinkedIn verification


---


## 🚀 Getting Started with Roomble

Follow these steps to run Roomble locally and experience the full roommate-matching magic:

---


### 1. **Prerequisites**

Make sure you have the following installed:

- **Node.js** and **npm**
- **Yarn** (optional but recommended)
- **MetaMask** browser extension (for smart contract signing)
- **Hardhat** for local blockchain testing

---

### 2. **Clone the Repository**

```bash
git clone https://github.com/aishasinha15/Roomble.git
```

### 3. **Navigate to the Project Root**

```bash
cd ROOMBLEFINAL
```

### 4. **Install Backend Dependencies**

```bash
cd server
npm install
```

### 5. **Start the Backend**

```bash
nodemon server.js
```

### 6. **Install Frontend Dependencies**

Open a new terminal:
```bash
cd client
npm install
```

### 7. **Start the Frontend**

```bash
npm run dev
```

### 8. Access the App

Open your browser and head to:  
👉 [http://localhost:5173](http://localhost:5173)


---


## 💼 Usage Flow

1. **Sign Up** with personal details.  
2. Complete **multi-step verification** (Email, Mobile, LinkedIn).  
3. Indicate if you have a place to share (upload photos accordingly).  
4. Pick **3 lifestyle prompts** to personalize your profile.  
5. **Login** with Mobile, Email, Aadhaar, or LinkedIn.  
6. Use the navigation bar to:  
   - 🔍 **Discover** potential roommates  
   - ❤️ **Likes** and receive likes  
   - 💬 **Chats** after mutual likes  
   - 🚪 **Logout** securely when you’re done  


## 📜 Scripts


# Start the backend
```bash
cd server
nodemon server.js
```

# Start the frontend
```bash
cd client
npm run dev
```


---


## 👩‍💻 Built With Love By

**Aisha Sinha**  
> *"Real roommates. Real trust. No shady leases."*


---


## 📜 License

MIT License — use it, remix it, improve it. Just give credit where it's due 

