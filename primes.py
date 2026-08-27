#def get_primes(limit: int) -> list[int]:
    """Return a list of prime numbers up to `limit` using the Sieve of Eratosthenes."""
    if limit < 2:
        return []
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    for p in range(2, int(limit**0.5) + 1):
        if sieve[p]:
            for multiple in range(p * p, limit + 1, p):
                sieve[multiple] = False
    return [p for p, is_prime in enumerate(sieve) if is_prime]

if __name__ == "__main__":
    limit = 2000
    primes = get_primes(limit)
    print(f"Total prime numbers up to {limit}: {len(primes)}\n")
    print("Prime numbers:")
    # Print formatted in rows of 10 for clean readability
    for i in range(0, len(primes), 10):
        print(" ".join(f"{p:4d}" for p in primes[i:i+10]))
