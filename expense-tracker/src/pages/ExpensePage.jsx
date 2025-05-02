import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import BalanceDisplay from "../components/BalanceDisplay";
import { useAuth } from "../context/AuthContext";
import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout"; // Ikon Logout
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Ikon Dompet

const ExpensePage = () => {
  const { logout } = useAuth(); // Ambil fungsi logout dari context

  return (
    <Box 
  sx={{
    backgroundImage: "url('/public/jakub-zerdzicki-U4-I4oH4xlg-unsplash.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", 
  }}
>
  <Card 
    sx={{ 
      p: 4, 
      maxWidth: 600, 
      borderRadius: 3, 
      boxShadow: 5, 
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5))", 
      backdropFilter: "blur(10px)",
      textAlign: "center",
      color: "#fff", 
    }}
  >
    <CardContent>
      <Stack spacing={3} alignItems="center">
        {/* Judul Aplikasi */}
        <Box display="flex" alignItems="center" gap={1}>
          <AccountBalanceWalletIcon fontSize="large" sx={{ color: "#fbc02d" }} />
          <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", color: "#FFD700" }}>
            Expense Tracker
          </Typography>

        </Box>

        {/* Saldo */}
        <BalanceDisplay />

        {/* Tombol Logout */}
        <Button 
          variant="contained" 
          type="submit"
          onClick={logout} 
          startIcon={<LogoutIcon />}
          sx={{ 
            fontSize: "0.8rem",
            padding: "6px 12px", 
            width: "150px",
            backgroundColor: "#e65100", 
            "&:hover": { bgcolor: "#bf360c" }
          }}
        >
          Logout
        </Button>

        {/* Form Tambah Pengeluaran */}
        <ExpenseForm />

        {/* Daftar Pengeluaran */}
        <ExpenseList />
      </Stack>
    </CardContent>
  </Card>
</Box>

  );
};

export default ExpensePage;
