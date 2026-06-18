import cls from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className={cls.LoaderWrap}>
      <span className={cls.Loader} />
    </div>
  );
};

export default PageLoader;
