import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { TextField, MenuItem, Button, Card, CardContent, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { addTransaction } = useAuth();

  const getPlaceholder = () => {
    switch (category) {
      case "Gaji":
        return "Masukkan sumber gaji";
      case "Makan":
        return "Masukkan nama makanan";
      case "Traveling":
        return "Masukkan destinasi perjalanan";
      default:
        return "Masukkan nama transaksi";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    
    addTransaction({ title, amount: parseFloat(amount), category });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        p: 4, 
        mb: 3, 
        maxWidth: 450, 
        mx: "auto",
        borderRadius: 4,
        background: "linear-gradient(135deg, #283593, #1565C0)", 
        boxShadow: 6, 
        color: "#fff", 
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)", boxShadow: 10 }
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth
            label={getPlaceholder()}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "#ffffff", borderRadius: "8px" }}
          />

          <TextField 
            fullWidth
            label="Jumlah"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "#ffffff", borderRadius: "8px" }}
          />
          
          <TextField
            select
            fullWidth
            label="Kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "#ffffff", borderRadius: "8px", textAlign: "left" }}
          >
            <MenuItem value="Gaji">Gaji</MenuItem>
            <MenuItem value="Makan">Makan</MenuItem>
            <MenuItem value="Traveling">Traveling</MenuItem>
            <MenuItem value="Belanja">Belanja</MenuItem>
            <MenuItem value="Hiburan">Hiburan</MenuItem>
          </TextField>

          <Button 
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 1, 
              backgroundColor: "#FFD700", 
              color: "#333", 
              "&:hover": { bgcolor: "#FFC107" } 
            }}
            startIcon={<AddIcon />}
          >
            Tambah
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
