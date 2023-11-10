completed_book:
	hugo new books/$(isbn)/index.md
	touch content/books/$(isbn)/review.md
	git add content/books/$(isbn)/

wishlist_book:
	hugo new content books/$(isbn).md
	git add content/books/$(isbn).md