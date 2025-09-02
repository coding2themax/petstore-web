import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Service } from "../../types/Service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{service.name}</Typography>
        <Typography variant="body2">{service.description}</Typography>
      </CardContent>
    </Card>
  );
}
