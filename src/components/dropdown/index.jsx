import {useEffect, useRef, useState} from "react";
import {ReactComponent as Arrow} from "../../assets/images/svg/arrow.svg";

function Index({setFiltered, selected, setSelected, options}) {
    const [isActive, setIsActive] = useState(false);
    const [selectedSvg, setSelectedSvg] = useState(1)
    const [rotate, setRotate] = useState(false);

    const handleClick = (name, category, id) => {
        setSelected(name);
        setSelectedSvg(id)
        setFiltered(category);
        setRotate(false);
        setIsActive(false);
    }
    const handleClickRotate = () => {
        setRotate(rotate => !rotate);
        setIsActive(!isActive);
    };

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setRotate(false);
                    setIsActive(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (

        <div className="dropdown" ref={wrapperRef}>

            <div
                className={rotate ? 'dropdown-button-rotate' : 'dropdown-button'}
                onClick={handleClickRotate}
            >
                {options.map((option) => (
                    (option.id === selectedSvg) &&
                    <span className="dropdown-svg" key={option.id}>
                        <option.svg/>
                        {selected}
                    </span>
                ))}
                <span></span>
                <span className="dropdown-arrow"><Arrow/></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        option.id !== selectedSvg &&
                        <div
                            key={option.id}
                            onClick={() => handleClick(option.value, option.category, option.id)
                            } className="dropdown-item">
                            <span><option.svg/></span>
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Index;