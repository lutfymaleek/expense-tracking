import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0); // Saldo awal (contoh Rp 100.000)
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Status login

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(prevBalance => prevBalance - expense.amount); // Kurangi saldo
  };

  const removeExpense = (title, amount) => {
    if (!amount || isNaN(amount)) return; // Pastikan jumlah valid sebelum mengupdate saldo
    setExpenses(expenses.filter(exp => exp.title !== title));
    setBalance(prevBalance => prevBalance + parseFloat(amount)); // Pastikan angka valid
  };

  const addTransaction = (transaction) => {
    setExpenses([...expenses, transaction]);

    // Jika transaksi adalah "Gaji", saldo bertambah
    if (transaction.category === "Gaji") {
      setBalance(prevBalance => prevBalance + transaction.amount); // Tambah saldo
    } else {
      setBalance(prevBalance => prevBalance - transaction.amount); // Kurangi saldo
    }
  };

  // Fungsi login
  const login = () => {
    setIsAuthenticated(true);
  };

  // Fungsi logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, balance, expenses, addExpense, removeExpense, addTransaction }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
