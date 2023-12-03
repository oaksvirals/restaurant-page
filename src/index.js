import css from "./style.css";
import { onPageLoad } from "./page-load";
import { makeHome, clearPage } from "./home";
import { makeContact } from "./contact";

onPageLoad();
makeContact();

function tabSwap() {
    console.log('placeholder')
};