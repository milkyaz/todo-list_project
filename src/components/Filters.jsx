import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const Filters = () => {
  const { filter: activeFilter = "all" } = useParams();

  return (
    <div className="link">
      <Button size="small" variant="outlined">
        {" "}
        <Link
          to="/all"
          style={{ color: activeFilter === "all" ? "red" : "black" }}
        >
          all
        </Link>
      </Button>
      <Button size="small" variant="outlined">
        <Link
          to="/active"
          style={{ color: activeFilter === "active" ? "red" : "black" }}
        >
          active
        </Link>
      </Button>
      <Button size="small" variant="outlined">
        <Link
          to="/completed"
          style={{ color: activeFilter === "completed" ? "red" : "black" }}
        >
          completed
        </Link>
      </Button>
    </div>
  );
};

export { Filters };
