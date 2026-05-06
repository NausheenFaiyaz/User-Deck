function Pagination({ page, totalPages, loading, canGoPrev, canGoNext, onPrev, onNext }) {
  return (
    <section className="toolbar" aria-label="Pagination">
      <button type="button" onClick={onPrev} disabled={!canGoPrev || loading}>
        Previous
      </button>
      <p>{`Page ${page} of ${totalPages}`}</p>
      <button type="button" onClick={onNext} disabled={!canGoNext || loading}>
        Next
      </button>
    </section>
  )
}

export default Pagination
