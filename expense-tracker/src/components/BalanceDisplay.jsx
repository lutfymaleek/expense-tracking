import { useAuth } from "../context/AuthContext";
import { Card, CardContent, Typography, Box } from "@mui/material";
import MoneyIcon from "@mui/icons-material/MonetizationOn"; // Ikon Uang

const BalanceDisplay = () => {
  const { balance } = useAuth();

  return (
    <Card 
      sx={{ 
        p: 2, 
        borderRadius: 3, // Membuat sudut lebih smooth
        textAlign: "center",
        width: "350px",
        background: balance < 0 
          ? "linear-gradient(135deg, #D32F2F, #B71C1C)" // Gradasi merah premium untuk saldo negatif
          : "linear-gradient(135deg, #00695C, #26A69A)", // Gradasi hijau keuangan untuk saldo positif
        color: "#fff",
        boxShadow: 4 // Menambahkan sedikit shadow untuk kesan elegan
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <MoneyIcon fontSize="medium" sx={{ color: balance < 0 ? "#FFCDD2" : "#FFD700" }} /> {/* Ikon berubah warna sesuai saldo */}
          <Typography variant="h6" fontWeight="bold">
            Saldo Tersisa
          </Typography>
        </Box>
        <Typography variant="h4" fontWeight="bold" mt={1}>
          Rp {balance.toLocaleString("id-ID")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BalanceDisplay;
