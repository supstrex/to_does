function Footer({ onShowUncompleted }) {
  return (
    <div className="Footer">
      <button onClick={onShowUncompleted}> Clear Completed Tasks </button>
    </div>
  );
}
export default Footer;