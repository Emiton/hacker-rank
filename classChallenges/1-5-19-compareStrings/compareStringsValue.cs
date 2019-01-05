using System;
using System.Collections.Generic;

class MainClass
{
  public static void Main (string[] args)
  {
    int difference = characterDifference("aaaa", "bbbb");
    Console.WriteLine(difference);
  }

  /*
  Purpose: Checks the difference between two strings.
  Returns: Returns the sum of the difference between all characters at the i-th
           position in each string
  */
  public static int characterDifference (string string1, string string2)
  {
    int difference = 0;

    // Check Length
    if(string1.Length != string2.Length) {
      Console.WriteLine("Both strings are must be equal!");
      return difference;
    }

    // Check all chars
    for(int i = 0; i < string1.Length; i++) {
      difference += string2[i] - string1[i];
    }

    return difference;
  }

}
