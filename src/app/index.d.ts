import { databaseAPI } from "./main/preload";

declare global {
    interface Window {databaseAPI: typeof databaseAPI}
}