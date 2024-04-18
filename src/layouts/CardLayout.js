import classes from "./CardLayout.module.css";

const CardHeader = ({ children }) => {
  return <div className={classes.header}>{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className={classes.content}>{children}</div>;
};

const CardLayout = (props) => {
  const { id, label, children, width, handleWidthChange } = props;
  const btnId = `btn-${id}`;

  return (
    <div className={classes.card} style={{ width }}>
      <CardHeader>
        <span className={classes.label}>{label}</span>
        <button
          id={btnId}
          className={classes.btn}
          onClick={() => handleWidthChange(id)}
        >
          Expand
        </button>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </div>
  );
};
export default CardLayout;
