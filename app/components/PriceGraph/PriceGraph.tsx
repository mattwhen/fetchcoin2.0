import React from "react";
import "./module.PriceGraph.css";
import "./index";

const PriceGraph = () => {
	return (
		<>
			<div className="center-panel">
				<div className="line-graph">
					<div style={{left: "10%", bottom: "20%"}}>
						1
					</div>
					<div style={{left: "20%", bottom: "20%"}}>
						2
					</div>
					<div style={{left: "30%", bottom: "20%"}}>
						3
					</div>
					<div style={{left: "40%", bottom: "20%"}}>
						4
					</div>
					<div style={{left: "50%", bottom: "20%"}}>
						5
					</div>
				</div>
			</div>
		</>
	);
};

export default PriceGraph;
