add_review:
	hugo new books/$(isbn)/index.md
	touch content/books/$(isbn)/review.md
	git add content/books/$(isbn)/

add_book:
	hugo new content books/$(isbn).md
	git add content/books/$(isbn).md