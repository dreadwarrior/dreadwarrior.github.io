completed_book:
	hugo new books/$(isbn)/index.md
	touch content/books/$(isbn)/review.md
	git add content/books/$(isbn)/

wishlist_book:
	hugo new content books/$(isbn).md
	git add content/books/$(isbn).md

en_completed_book:
	hugo new content --kind books.openlibrary books/$(isbn)/index.md
	touch content/books/$(isbn)/review.md
	git add content/books/$(isbn)/

en_wishlist_book:
	hugo new content --kind books.openlibrary books/$(isbn).md
	git add content/books/$(isbn).md

# Using "@" is suppressing the output of the command being executed.
# Using "@-" is additionally suppressing the STDERR output of that command.
formatted_isbn:
	@jbang --quiet ./script/isbn13.java $(isbn)