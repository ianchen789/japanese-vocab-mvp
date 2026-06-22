# AGENTS.md

## Project Overview

This project is a Japanese vocabulary learning MVP for N4–N3 learners.

The product is not a general Japanese learning app.
The MVP focuses only on validating whether the following learning loop helps users remember vocabulary better than traditional flashcards:

New word learning → phrase/context impression → quiz → mistake rescue → BAC staged review → mastery judgment

## Core Product Goal

Help users remember Japanese vocabulary more effectively through:

1. Short and focused new-word learning
2. Common phrases
3. Daily-life example sentences
4. Quiz-based memory validation
5. Mistake rescue
6. BAC staged review
7. System-driven mastery judgment

The MVP must remain simple and focused.

---

## Current MVP Version

Current baseline: PRD v0.1 / MVP v0.11

The current MVP scope is fixed unless explicitly changed by the product owner.

---

## Must Follow Product Principles

### 1. Do not build a traditional flashcard app

Do not implement a simple flow like:

Japanese word → Chinese meaning → next card

The product must follow this learning loop:

Japanese word → kana → Chinese core meaning → common phrases → daily-life example sentence → quiz → review

---

### 2. Do not rely on user self-evaluation

Do not ask users to decide whether they remember a word as the main mastery signal.

Avoid primary buttons such as:

* I remember
* I do not remember
* Easy / Hard as the main status logic

Word status must be determined mainly by quiz and review results.

---

### 3. Do not require Japanese text input

The MVP must not require users to type Japanese.

Allowed interactions:

* Click
* Select
* Tap next
* Choose an option
* Arrange sentence fragments

Disallowed interactions:

* Typing Japanese words
* Typing full Japanese sentences
* Free-form translation input
* AI-based text correction

---

### 4. Keep the UI minimal

The first version should reduce user operations as much as possible.

Do not add:

* Extra menus
* Dashboards
* Leaderboards
* Settings pages unless explicitly requested
* “Show more” buttons
* Complex progress charts
* Social features

The home screen should only have two primary actions:

* New Words
* Review

---

### 5. Do not add features outside MVP scope

The following features are explicitly excluded from the first MVP:

* Audio pronunciation
* Pitch accent labels
* Images
* Grammar lessons
* Reading articles
* AI-generated sentences
* User-created word lists
* Social features
* Ranking
* Gamification systems
* Japanese input questions

Do not add these unless explicitly instructed.

---

## UI Rules

### Home Screen

The home screen should be minimal.

Required elements:

* Title: 今日學習
* Button: 新單字
* Button: 複習
* New word count
* Review count

No dashboard, no chart, no sidebar, no extra navigation.

---

### New Word Screen

Each new word screen should show:

1. Japanese word
2. Kana
3. Core Chinese meaning
4. 2–3 common phrases
5. One daily-life example sentence
6. Chinese translation
7. One button: 下一個

Do not show label text such as:

* 詞性：
* 意思：
* 例句：
* 常用片語：

The screen should feel like a clean learning card, not a data table.

---

### Furigana Rule

If phrases or example sentences contain kanji, provide kana support.

Preferred format:

明日（あした）の夜（よる）、レストランを予約（よやく）しました。

Do not show kanji-only example sentences for N4–N3 learners.

---

## New Word Learning Flow

Daily new words: 10
Grouping: 2 groups of 5 words

Flow:

1. Learn 5 new words
2. Take 5 quiz questions
3. Learn another 5 new words
4. Take another 5 quiz questions
5. Rescue today’s mistaken questions at the end
6. Show completion page

Do not immediately repeat wrong questions inside each 5-question quiz block.
Mistakes should be collected and rescued after all 10 new words are completed.

---

## New Word Quiz Rules

Quiz type:

New example sentence cloze + Chinese prompt + multiple-choice answer

Rules:

1. The quiz sentence must not be the same as the learning sentence.
2. The sentence must be daily-life oriented.
3. The sentence must not exceed the learner’s current level.
4. The question must not require Japanese input.
5. The answer options must not be too easy to guess based only on kanji.
6. If the user answers incorrectly, immediately show the correct answer.
7. Wrong questions are added to today’s mistake rescue queue.

---

## Mistake Rescue Rules

At the end of the 10 new words, show all mistaken questions again.

Status rules:

* First-time correct → initial_known
* Wrong, then rescue correct → unfamiliar
* Wrong, then rescue wrong again → forgotten

A rescued correct answer does not mean the word is mastered.

---

## Review Flow

Review follows BAC order.

BAC means:

B → A → C

### B: Chinese to Japanese phrase

Purpose: test whether the user can recall the correct Japanese phrase from Chinese.

Example:

預約飯店

A. ホテルを予約（よやく）する
B. ホテルを確認（かくにん）する
C. ホテルを説明（せつめい）する
D. ホテルを準備（じゅんび）する

---

### A: Example sentence cloze

Purpose: test whether the user can choose the correct word or phrase in context.

Example:

来週（らいしゅう）、ホテルを＿＿＿＿。

中文：下週預約飯店

A. 予約（よやく）します
B. 確認（かくにん）します
C. 説明（せつめい）します
D. 準備（じゅんび）します

---

### C: Sentence building

Purpose: test whether the user can form a full sentence using the word.

Example:

中文：我預約了明天晚上的餐廳。

Fragments:

* 明日（あした）の夜（よる）
* レストランを
* 予約（よやく）しました

Correct answer:

明日（あした）の夜（よる）、レストランを予約（よやく）しました。

---

## Review Stage Rules

A word must progress through stages:

1. B
2. A
3. C
4. completed

A word should not be considered mastered until it has passed B, A, and C across the review cycle.

---

## SRS Rules

Use a simple MVP schedule:

* D0: New word learning
* D1: B review
* D3: A review
* D7: C review

After C is passed, the word can become a mastered candidate.

Do not implement a complex Anki-like algorithm in the MVP.

---

## Word Status Values

Use these status values:

* unlearned
* learning
* initial_known
* unfamiliar
* forgotten
* stable
* mastered

Do not invent additional statuses unless explicitly approved.

---

## Required Data Models

The MVP should support these core data structures:

1. words
2. phrases
3. sentences
4. quiz_questions
5. user_word_progress
6. quiz_attempts
7. study_sessions

Mock data should be used before connecting a real database.

---

## Development Rules

### Work in small phases

Do not implement the full app in one large change.

Recommended phases:

1. Project skeleton
2. Mock data
3. Home screen
4. New word learning flow
5. New word quiz
6. Mistake rescue
7. BAC review
8. Status and SRS logic
9. Completion pages
10. Database integration

---

### Do not add unrequested features

If a feature is not in the current PRD or task description, do not add it.

If something seems useful but is outside scope, mention it as a suggestion instead of implementing it.

---

### Keep implementation inspectable

Prefer clear, readable code over clever abstractions.

Use simple data structures first.
Avoid premature optimization.
Avoid unnecessary libraries.

---

### Before completing a task

Check the following:

1. Did the change follow the MVP scope?
2. Did it avoid excluded features?
3. Did it preserve the BAC review logic?
4. Did it avoid Japanese text input?
5. Did it keep the UI minimal?
6. Did it avoid user self-evaluation as the main memory signal?
7. Did it use quiz results to update progress?

---

## Product Owner Notes

This product is being built by a PM who is also a target user.

The first goal is not to build a perfect learning app.
The first goal is to validate whether this memory design works.

When in doubt, choose:

* Less UI
* Fewer actions
* Higher content quality
* Clearer learning flow
* Better review logic

Do not expand scope without approval.
