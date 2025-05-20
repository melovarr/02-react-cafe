import css from "./CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Cafe</h1>
      <p className={css.destriction}>
        Please rate our service by selecting one of the options balow.
      </p>
    </div>
  );
}
