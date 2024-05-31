
import webpack from "webpack";
import {buildWebpackConfigs} from "./config/build/buildWebpackConfigs";
import {BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config : webpack.Configuration = buildWebpackConfigs({
    mode: "development",
    paths: paths,
    isDev
});

export default config;