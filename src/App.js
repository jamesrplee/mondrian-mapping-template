import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


function App({svg}) {
  return (
    <div className="App">
      {svg && `hi ${svg}`}
      {/* <div
        id="svg"
      >
        <svg
          width={svg && svg.width.baseVal.value}
          height={svg && svg.height.baseVal.value}
          viewBox={svg && `${svg.viewBox.baseVal.x} ${svg.viewBox.baseVal.y} ${svg.viewBox.baseVal.width} ${svg.viewBox.baseVal.height}`}
          dangerouslySetInnerHTML={svg && { __html: svg.innerHTML }}
        />
      </div> */}

    </div>
  );
}

App.propTypes = {
  svg: PropTypes.string
}

App.defaultProps = {
  svg: '<defs></defs><g><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 205.71428571428572 L 411.42857142857156 205.71428571428572 L 411.42857142857156 411.4285714285715 L 0 411.4285714285715 L 0 205.71428571428572 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 411.42857142857144 205.71428571428572 L 617.1428571428571 205.71428571428572 L 617.1428571428571 411.4285714285715 L 411.42857142857144 411.4285714285715 L 411.42857142857144 205.71428571428572 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 617.1428571428571 L 617.1428571428571 617.1428571428571 L 617.1428571428571 822.8571428571429 L 0 822.8571428571429 L 0 617.1428571428571 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 617.1428571428571 617.1428571428571 L 822.8571428571429 617.1428571428571 L 822.8571428571429 822.8571428571429 L 617.1428571428571 822.8571428571429 L 617.1428571428571 617.1428571428571 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 617.1428571428571 205.71428571428572 L 822.8571428571429 205.71428571428572 L 822.8571428571429 411.4285714285715 L 617.1428571428571 411.4285714285715 L 617.1428571428571 205.71428571428572 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 822.8571428571429 205.71428571428572 L 1440 205.71428571428572 L 1440 411.4285714285715 L 822.8571428571429 411.4285714285715 L 822.8571428571429 205.71428571428572 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 822.8571428571429 L 617.1428571428571 822.8571428571429 L 617.1428571428571 1028.5714285714287 L 0 1028.5714285714287 L 0 822.8571428571429 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 617.1428571428571 822.8571428571429 L 1028.5714285714287 822.8571428571429 L 1028.5714285714287 1440 L 617.1428571428571 1440 L 617.1428571428571 822.8571428571429 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 0 L 1028.5714285714287 0 L 1028.5714285714287 205.71428571428578 L 0 205.71428571428578 L 0 0 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1028.5714285714287 0 L 1440 0 L 1440 205.71428571428578 L 1028.5714285714287 205.71428571428578 L 1028.5714285714287 0 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1028.5714285714287 822.8571428571429 L 1440 822.8571428571429 L 1440 1234.2857142857144 L 1028.5714285714287 1234.2857142857144 L 1028.5714285714287 822.8571428571429 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1028.5714285714287 1234.2857142857144 L 1440 1234.2857142857144 L 1440 1440 L 1028.5714285714287 1440 L 1028.5714285714287 1234.2857142857144 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F7D842" stroke="#000000" paint-order="fill stroke markers" d=" M 0 1028.5714285714287 L 617.1428571428571 1028.5714285714287 L 617.1428571428571 1234.2857142857144 L 0 1234.2857142857144 L 0 1028.5714285714287 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 1234.2857142857144 L 617.1428571428571 1234.2857142857144 L 617.1428571428571 1440 L 0 1440 L 0 1234.2857142857144 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 822.8571428571429 617.1428571428571 L 1234.2857142857144 617.1428571428571 L 1234.2857142857144 822.8571428571429 L 822.8571428571429 822.8571428571429 L 822.8571428571429 617.1428571428571 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#1356A2" stroke="#000000" paint-order="fill stroke markers" d=" M 1234.2857142857144 617.1428571428571 L 1440 617.1428571428571 L 1440 822.8571428571429 L 1234.2857142857144 822.8571428571429 L 1234.2857142857144 617.1428571428571 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 411.42857142857144 L 1234.2857142857144 411.42857142857144 L 1234.2857142857144 617.1428571428571 L 0 617.1428571428571 L 0 411.42857142857144 Z" stroke-miterlimit="10" stroke-width="4"></path><path fill="#D40920" stroke="#000000" paint-order="fill stroke markers" d=" M 1234.2857142857144 411.42857142857144 L 1440 411.42857142857144 L 1440 617.1428571428571 L 1234.2857142857144 617.1428571428571 L 1234.2857142857144 411.42857142857144 Z" stroke-miterlimit="10" stroke-width="4"></path></g>'
}

export default App;
