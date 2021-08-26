import React from 'react';
function Button({text,...others}) {
    return (
        <p>
            {text}
            <button
                {...others}
            />           
        </p>
    );
}
export default Button;