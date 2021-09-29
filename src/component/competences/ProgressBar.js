import React from 'react';

const ProgressBar = (props) => {
console.log(props);

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Pourcentages</span>
                <span>50%</span>
                <span>100%</span>
            </div>
            <div>
                {
                    props.langages.map((item) => {
                        let xpPercent = 2;
                        let progressBar = item.xp / xpPercent * 100 +'%';

                        return(
                            <div key={item.id} className="langagesList">
                                <li>{item.value}</li>

                                <div className="progressBar" style={
                                    {width:progressBar}}>
                                </div>    

                            </div>    
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;