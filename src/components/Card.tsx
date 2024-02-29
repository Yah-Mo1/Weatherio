import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import Typography from "@mui/material/Typography";
import haze from "../assets/haze.png";
import sunny from "../assets/sunny.png";
import rainy from "../assets/rainy.png";
import smoke from "../assets/smoke.png";
import snow from "../assets/snow.png";
import clear from "../assets/clear.png";
import Grid from "@material-ui/core/Grid";
//Changing
export default function MediaCard(props: any) {
  if (!props.city || !props.city.main) {
    return null;
  }

  interface WeatherImages {
    [weatherCondition: string]: string;
  }
  const weatherImages: WeatherImages = {
    Sunny: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Haze: haze,
    Smoke: smoke,
    Snow: snow,
    Clear: clear,
    // Add more conditions as necessary
  };

  const getWeatherImage = (weatherCondition: any) => {
    const defaultImage = weatherImages.Cloudy;
    return weatherImages[weatherCondition] || defaultImage;
  };

  return (
    <>
      <div className="card">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "2px 2px 2px 2px grey",
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={getWeatherImage(
                props.city.weather &&
                  props.city.weather[0] &&
                  props.city.weather[0].main
              )}
              title="weather-image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.city.name}
              </Typography>
              <hr />
              <Typography variant="body2" color="text.secondary" fontSize={15}>
                Temperature -{" "}
                {props.city.main.temp !== undefined
                  ? `${props.city.main.temp} C`
                  : "N/A"}
                <br />
                Minimum temperature -{" "}
                {props.city.main.temp_min !== undefined
                  ? `${props.city.main.temp_min} C`
                  : "N/A"}
                <br />
                Maximum temperature -{" "}
                {props.city.main.temp_max !== undefined
                  ? `${props.city.main.temp_max} C`
                  : "N/A"}
                <br />
                Weather Condition -{" "}
                {props.city.weather &&
                props.city.weather[0] &&
                props.city.weather[0].main
                  ? props.city.weather[0].main
                  : "N/A"}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">adad</Button>
            <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </Grid>
      </div>
    </>
  );
}
