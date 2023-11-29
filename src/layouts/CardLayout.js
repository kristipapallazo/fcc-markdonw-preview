import classes from "./CardLayout.module.css";

const CardHeader = ({ children }) => {
	return <div className={classes.header}>{children}</div>;
};

const CardContent = ({ children }) => {
	return <div className={classes.content}>{children}</div>;
};

const CardLayout = (props) => {
	const { label, children } = props;

	return (
		<div className={classes.card}>
			<CardHeader>
				<span>{label}</span>
				<button>expend</button>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</div>
	);
};
export default CardLayout;
