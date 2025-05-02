import { useAuth } from "../context/AuthContext";
import { Card, CardContent, Typography, IconButton, Box, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const categoryColors = {
  Gaji: "#4CAF50", // Hijau
  Makan: "#FF9800", // Oranye
  Traveling: "#3F51B5", // Biru
  Belanja: "#E91E63", // Merah Muda
  Hiburan: "#9C27B0", // Ungu
  Default: "#607D8B" // Abu-abu untuk kategori lain
};

const ExpenseList = () => {
  const { expenses, removeExpense } = useAuth();

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto", width: "100%" }}>
    {expenses.length === 0 ? (
      <Typography variant="h6" color="textSecondary" align="center">
        Belum ada pengeluaran.
      </Typography>
    ) : (
      <Stack spacing={2}>
        {expenses.map((exp, index) => (
          <Card 
            key={index} 
            variant="outlined" 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              padding: 3, 
              borderRadius: 4, 
              width: "100%", 
              backgroundColor: "#f9f9f9", 
              borderLeft: `8px solid ${categoryColors[exp.category] || categoryColors.Default}`,
              transition: "0.3s",
              boxShadow: 4, 
              "&:hover": { transform: "scale(1.02)", boxShadow: 6 } 
            }}
          >
            <CardContent>
              <Typography variant="h6" color="primary">
                {exp.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Rp {exp.amount.toLocaleString("id-ID")}
              </Typography>
            </CardContent>
            <IconButton 
              onClick={() => removeExpense(exp.title, exp.amount)} 
              color="error"
              sx={{ "&:hover": { bgcolor: "rgba(255, 0, 0, 0.1)" } }}
            >
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </Stack>
    )}
  </Box>  
  );
};

export default ExpenseList;
