import type { Configuration } from "webpack";
import path from "path";
import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
	test: /\.css$/,
	use: [
		{ loader: "style-loader" },
		{ loader: "css-loader" },
		{ loader: "postcss-loader" },
	],
});

export const rendererConfig: Configuration = {
	entry: {
		main: path.resolve(__dirname, "src/renderer/main.tsx"),
		auth: path.resolve(
			__dirname,
			"src/renderer/context/AuthContextProvider.tsx"
		),
	},
	target: "web",
	module: {
		rules,
	},
	plugins,
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
	},
	devtool: "source-map",
	output: {
		filename: "[name].js",
	},
};
