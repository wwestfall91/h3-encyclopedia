import "./ProgressivePagination.scss";

type Props = {
  visibleCount: number;
  totalCount: number;
  remainingCount: number;
  pageSize: number;
  onLoadMore: () => void;
};

function ProgressivePagination(props: Props) {
  if (props.totalCount === 0) return null;

  return (
    <div className="progressive-pagination" aria-live="polite">
      <span>
        Showing {props.visibleCount} of {props.totalCount}
      </span>
      {props.remainingCount > 0 && (
        <button type="button" onClick={props.onLoadMore}>
          Load {Math.min(props.pageSize, props.remainingCount)} more
        </button>
      )}
    </div>
  );
}

export default ProgressivePagination;