import "./navbar.css";
import "@fortawesome/fontawesome-svg-core";
import {X, List,} from 'phosphor-react';
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn svg')
const dropDownMenu = document.querySelector('.dropDownMenu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList= isOpen
    ?<List/>
    :<X/>
}