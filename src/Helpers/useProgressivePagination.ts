import { useState } from "react";

type PaginationState = {
  resetKey: unknown;
  visibleCount: number;
};

export function useProgressivePagination<T>(
  items: readonly T[],
  pageSize: number,
  resetKey: unknown
) {
  const [state, setState] = useState<PaginationState>({
    resetKey,
    visibleCount: pageSize,
  });

  if (!Object.is(state.resetKey, resetKey)) {
    setState({ resetKey, visibleCount: pageSize });
  }

  const clampedVisibleCount = Math.min(
    Object.is(state.resetKey, resetKey) ? state.visibleCount : pageSize,
    items.length
  );
  const remainingCount = items.length - clampedVisibleCount;

  const loadMore = () => {
    setState((current) => {
      const currentVisibleCount = Object.is(current.resetKey, resetKey)
        ? current.visibleCount
        : pageSize;

      return {
        resetKey,
        visibleCount: Math.min(currentVisibleCount + pageSize, items.length),
      };
    });
  };

  return {
    visibleItems: items.slice(0, clampedVisibleCount),
    visibleCount: clampedVisibleCount,
    totalCount: items.length,
    remainingCount,
    loadMore,
  };
}