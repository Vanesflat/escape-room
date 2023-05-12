import classes from './loader.module.scss';
import cn from 'classnames';

type LoaderProps = {
  isSmall?: boolean;
};

function Loader({ isSmall = false }: LoaderProps): JSX.Element {
  return (
    <div className={cn(!isSmall && classes.wrapper)}>
      <div className={cn(classes.loader, isSmall && classes.small)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
