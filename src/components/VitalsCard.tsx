
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string | number;
  unit?: string;
  color?: string;
}

export default function VitalsCard({ title, value, unit, color = "#1976d2" }: Props) {
  return (
    <Card sx={{ borderLeft: `6px solid ${color}`, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>{value} {unit}</Typography>
      </CardContent>
    </Card>
  );
}
