# 🧠 React Async Data Fetching UI Example

This project demonstrates **asynchronous behavior in a React UI** using a custom hook for data fetching (`useFetchData`), clean component separation, error handling, loading states, and basic conditional rendering.

## 📁 File Overview

### `App.tsx` or `App.jsx`

This is the main component that:

- Displays a title
- Includes a button to cycle through different users (from 1 to 10)
- Renders the `UserProfile` component
- Uses a simple CSS block for styling

---

### 🔄 `useFetchData` – Custom Hook

This custom hook encapsulates data fetching logic using `fetch()` with async/await. It abstracts away the repetitive patterns of managing `loading`, `error`, and `data` states.

#### ✅ Advantages:
- Follows the **Separation of Concerns** principle
- Promotes **code reuse**
- Enables **cleaner component logic**

#### Code Summary:
```js
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        if(isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err);        
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
}
```

---

### 👤 `UserProfile` – Display Component

This functional component accepts a `userId` prop and fetches user data using `useFetchData`.

It demonstrates:

- **Loading Feedback**
- **Error Display**
- **Success Rendering**

```js
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetchData(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (loading) return <div className="spinner"></div>;
  if (error) return <p style={{ color: "red" }}>Error loading user: {error.message}</p>;

  if (!user) return null;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}
```

---

### 🚀 `App` – Main Container

```js
function App() {
  const [currentUserId, setCurrentUserId] = useState(1);

  const handleNextUser = () => {
    setCurrentUserId(prevId => (prevId % 10) + 1);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Asynchronous Behavior in React UI</h1>
      <button
        onClick={handleNextUser}
        style={{
          marginBottom: 16,
          padding: "8px 12px",
          borderRadius: 5,
          background: "#007bff",
          color: "#fff",
          border: "none"
        }}
      >
        Load Next User (Current: {currentUserId})
      </button>
      {/* Renders the profile of the current user */}
      <UserProfile userId={currentUserId} />
    </div>
  );
}
```

---

## 🎨 Basic Styling (with `style jsx`)

```css
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}
```

---

## 🧩 Best Practices Highlighted

| Principle | Description |
|----------|-------------|
| **Separation of Concerns (SoC)** | Keeps data logic in `useFetchData`, and rendering logic in `UserProfile`. |
| **Single Responsibility Principle (SRP)** | Each component and hook has a focused role. |
| **Reusable Logic** | `useFetchData` can be reused in any component that needs async data. |
| **Progressive Enhancement** | UI handles loading and error states gracefully. |

---

## 🔗 External API Used

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake API for testing user data.

---

## 📦 Installation & Run

```bash
git clone https://github.com/sergiomontey/Asynchronous_Behavior.git
cd react-async-fetch-demo
npm install
npm start
```

---

## 📜 License

MIT © 2025 Sergio Montecinos
