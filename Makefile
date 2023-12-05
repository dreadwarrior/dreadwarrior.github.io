SHELL := bash

# Using "@" is suppressing the output of the command being executed.
# Using "@-" is additionally suppressing the STDERR output of that command.
formatted-isbn:
	@jbang --quiet ./script/isbn13.java $(shell read -p "ISBN: " isbn; echo $$isbn)
.PHONY: formatted-isbn

book:
	@{ \
		formatted_isbn="$$(make formatted-isbn)"; \
		\
		echo "Did you completed the book?"; \
		completed="$$( \
                   	select completed in "Yes" "No"; do \
                   		echo $$completed; \
                   		exit; \
                   	done; \
                   )"; \
	    \
	    echo "Is the book in English?"; \
	    archetype_kind="$$( \
                        	select is_english in "Yes" "No"; do \
                        		case $$is_english in \
                        			Yes ) echo "--kind books.openlibrary";exit;; \
                        			No ) exit;; \
                        		esac \
                        	done; \
                        )"; \
		\
		echo "Generating book content for ISBN $${formatted_isbn} in bookshelf $${bookshelf}"; \
		\
		if [[ "x$${completed}" = "xNo" ]]; then \
			hugo new content $${archetype_kind} books/$${formatted_isbn}.md; \
			git add content/books/$${formatted_isbn}.md; \
		elif [[ "x$${completed}" = "xYes" ]]; then \
			hugo new content $${archetype_kind} books/$${formatted_isbn}/index.md; \
			touch content/books/$${formatted_isbn}/review.md; \
			git add content/books/$${formatted_isbn}/; \
		fi; \
	}
.PHONY: book