// defines the shape of the state which Redux will store
export interface StoreState {
    /** the language that the app is written in */
    languageName: string;
    /** the specified enthusiasm level */
    enthusiasmLevel: number;
}
