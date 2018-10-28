import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/includeAll.css';

class TopMenuBar extends React.Component {

    render() {
        return (
            <div>
                <nav class="colorlib-nav" role="navigation">
                    <div class="top-menu">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xs-2">
                                    <div id="colorlib-logo">
                                        <img src="images/gondrand_logo_wht.png" width="200px"/>
                                    </div>
                                </div>
                                <div class="col-xs-8 text-right menu-1" >
                                    {/*contenido del menu*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenuBar;
